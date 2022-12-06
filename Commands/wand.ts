import { DimensionId } from "bdsx/bds/actor";
import { RelativeFloat, Vec3 } from "bdsx/bds/blockpos";
import { ActorCommandSelector, Command, CommandPermissionLevel, CommandPosition, CommandRawText, PlayerCommandSelector } from "bdsx/bds/command";
import { JsonValue } from "bdsx/bds/connreq";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { fsutil } from "bdsx/fsutil";
import { bedrockServer } from "bdsx/launcher";
import { bool_t, CxxString, int32_t } from "bdsx/nativetype";
import { shellPrepareData } from "bdsx/shellprepare/data";
import * as fs from 'fs';
import * as path from 'path';
import { OutputFileType } from "typescript";

command.register('/wand', 'Give WEBE wand').overload((param, origin, output) => {
    origin.getEntity()?.runCommand(`tellraw @a{"rawtext":[{"text":"<${param.character}> ${param.text}"}]}`);
}, {
    character: CxxString, //The name of the character
    text: CxxString, //The text to be displayed
});