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
    }, {});
});