// Copyright (C) 2021 Theros [SvalTek|MisModding]
// 
// This file is part of tstl-template-miscreated.
// 
// tstl-template-miscreated is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// tstl-template-miscreated is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with tstl-template-miscreated.  If not, see <http://www.gnu.org/licenses/>.

declare namespace System {

    /** 
     * Check if Running on Server or Client
     * @returns boolean     true if we are running on Server
    */
    export function IsDedicatedServer(): boolean;

    /**
     * Checks if the system is the editor.
     * @returns boolean     true if we are running in editor
    */
    export function IsEditor(): boolean;

    /**
     * Checks if the system is in pure editor mode, i.e. not editor game mode.
     * @returns boolean     true if pure editor mode
    */
    export function IsEditing(): boolean;

    /**
     * write a message to the Log
     * @param sText Text to be logged
    */
    export function Log(sText: string): void

    /**
     * write a warning to the Log
     * @param sText Text to be logged
    */
    export function Warning(sText: string): void

    /**
     * write an error to the Log
     * @param sText Text to be logged
    */
    export function Error(sText: string): void

    /**
     * Logs important data that must be printed regardless verbosity.
     * @param sText Text to be Logged
     */
    export function LogAlways(sText: string): void

    /**
     * Loads a font
     * @param pszName Font Name
    */
    export function LoadFont(pszName: string): void

    /**
     * Executes a Console Command
     * @param szCmd Command String
    */
    export function ExecuteCommand(szCmd: string): void

    /**
     * Log a message to the Console
     * @param sText Text to be Logged
     */
    export function LogToConsole(sText: string): void

    /** Clears the Console */
    export function ClearConsole(): void

    /** Gets the current time */
    export function GetCurrTime(): number

    /** Gets the current asynchronus time */
    export function GetCurrAsyncTime(): number

    /** Gets the frame time. */
    export function GetFrameTime(): void

    /** Gets the local operating system time. */
    export function GetLocalOSTime(): void

    /** Gets the config specification. */
    export function GetConfigSpec(): void

    /** Checks if the Game is Multiplayer */
    export function IsMultiplayer(): boolean

    /** Gets an entity from its ID.
     * @param entityId   Entity identifier.
    */
    export function GetEntity(entityId: number): any;

    /** Gets an entity class from its ID. */
    export function GetEntityClass(entityId: number): string

    /** Gets all the entities contained in the specific area of the level.
     * @param center	Center position vector for the area where to get entities.
     * @param radius	Radius of the area.
    */
    export function GetEntities(center: vector, radius: number): any[];

    /** Gets all the entities of the specified class.
     * @param EntityClass	Entity class name.
    */
    export function GetEntitiesByClass(EntityClass: string): any[];

    /** Gets all the entities contained into the specified sphere.
     * @param center	Center position vector for the area where to get entities.
     * @param radius	Radius of the area.
    */
    export function GetEntitiesInSphere(center: vector, radius: number): any[];

    /** Gets all the entities contained into the specified sphere for the specified class name.
     * @param center	Center position vector for the area where to get entities.
     * @param radius	Radius of the area.
     * @param EntityClass	Entity class name.
    */
    export function GetEntitiesInSphereByClass(center: vector, radius: number, EntityClass: string): any[];

    /** Gets all the entities contained into the specified sphere.
     * @param center	Center position vector for the area where to get entities.
     * @param radius	Radius of the area.
    */
    export function GetEntitiesInBox(center: vector, radius: number): any[];

    /** Gets all the entities contained into the specified sphere for the specified class name.
     * @param center	Center position vector for the area where to get entities.
     * @param radius	Radius of the area.
     * @param EntityClass	Entity class name.
    */
    export function GetEntitiesInBoxByClass(center: vector, radius: number, EntityClass: string): any[];

    /**
     * Gets the nearest entity with the specified class.
     * @param centre	Centre position vector for the area where to look at entities.
     * @param radius	Radius of the sphere.
     * @param className	Entity class name.
    */
    export function GetNearestEntityByClass(centre: vector, radius: number, className: string): any;

    /**
     * Retrieve entity table for the first entity with specified name.
     * If multiple entities with same name exist, first one found is returned.
     * @param sEntityName	Name of the entity to search.
    */
    export function GetEntityByName(sEntityName: string): any;

    /**
     * Retrieve entity table for the first entity with specified name.
     * If multiple entities with same name exist, first one found is returned.
     * @param sEntityName	Name of the entity to search.
    */
    export function GetEntityIdByName(sEntityName: string): entityId;

    /**
     * Sets the Value of the CVariable
     * @param sCVarName Name of the Variable
     * @param value Value of the Variable
    */
    export function SetCVar(sCVarName: string, value: string | number): void;

    /**
     * Sets the Value of the CVariable
     * @param sCVarName Name of the Variable
    */
    export function GetCVar(sCVarName: string): number | string;

    /**
     * 
     * @param sCCommandName cCommand Name
     * @param sCommand Command String
     * @param sHelp Command Usage help Text
    */
    export function AddCCommand(sCCommandName: string, sCommand: string, sHelp: string): void;

    /** Gets the surface type identifier by its name.
     * @param surfaceName	Surface name.
    */
    export function GetSurfaceTypeIdByName(surfaceName: string): sSurfaceType;

    /** Gets the surface type name by its identifier.
     * @param surfaceId	Surface identifier.
    */
    export function GetSurfaceTypeNameById(surfaceId: number): sSurfaceType;

    /** Removes the specified entity.
     * @param entityId	Entity identifier.
    */
    export function RemoveEntity(entityId: number): void;

    /** Spawns an entity.
     * @param params	Entity parameters.
    */
    export function SpawnEntity(params: e_spawnParams): void;

}