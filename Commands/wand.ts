import { Operator } from "bdsx/assembler";
import { ActorCommandSelector, Command, CommandPermissionLevel, CommandPosition, CommandRawText, PlayerCommandSelector } from "bdsx/bds/command";
import { JsonValue } from "bdsx/bds/connreq";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { CxxVectorToArray } from "bdsx/cxxvector";
import { events } from "bdsx/event";
import { fsutil } from "bdsx/fsutil";
import { bedrockServer } from "bdsx/launcher";
import { bool_t, CxxString, int32_t } from "bdsx/nativetype";
import { shellPrepareData } from "bdsx/shellprepare/data";
import * as fs from 'fs';
import * as path from 'path';

command.register('wwand', 'Give WEBE wand', CommandPermissionLevel.Operator).overload((param, origin, output) => {

    output.success("§o§5Successfully Given Wand"),
        origin.getEntity()?.runCommand(`give @s webe:wand`);
}, {});
