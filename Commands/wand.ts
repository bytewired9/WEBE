import { CommandPermissionLevel } from "bdsx/bds/command";
import { ItemStack } from "bdsx/bds/inventory";
import { command } from "bdsx/command";
import { events } from "bdsx/event";

events.serverOpen.on(() => {
    command
        .register('wwand', 'Give WEBE wand', CommandPermissionLevel.Operator)
        .overload((param, origin, output) => {
            const player = origin.getEntity();
            if (!player?.isPlayer()) {
                output.error('Command needs to be ran by a player!');
                return;
            }

            const wandItem = ItemStack.constructWith('webe:wand', 1);
            if (wandItem.getName() === 'minecraft:air') {
                output.error('Cant get wand item! Are you sure you have the RP and BP installed?');
                return;
            }

            player.addItem(wandItem);
            player.sendInventory();

            output.success('§o§5Successfully Given Wand')
        }, {});
});