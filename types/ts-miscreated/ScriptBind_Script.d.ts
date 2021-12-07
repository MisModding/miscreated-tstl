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

declare namespace Script {

    /** Reloads all Scripts */
    export function ReloadScripts(): void

    /** Reload the Script */
    export function ReloadScript(): void

    /** 
     * Reloads the Specified enitity Script
     * @param className Name of the Entity Script
    */
    export function ReloadEntityScript( className: string): void

    /** Unloads the Script */
    export function UnloadScript(): void

    /**
     * Set a general script timer
     * @param nMilliseconds Delay in Milliseconds
     * @param luaFunction callback function to run
     * @param userData (optional) Any UserDefined Table, If specified will be passed as the first Argument of the Callback function
     */
    export function SetTimer<T>( nMilliseconds:number, luaFunction:string, userData?: T ): timerId;

    /**
     * Set a general script timer
     * @param nMilliseconds Delay in Milliseconds
     * @param luaFunction callback function to run
     * @param userData (optional) Any UserDefined Table, If specified will be passed as the first Argument of the Callback function
     */
     export function SetTimerForFunction<T>(duration: number, luaFunction:string, userData?: T): timerId;
    
     /**
      * Stops a timer set by the Script.SetTimer/Script.SetTimerForFunction methods.
      * @param nTimerId ID of the timer returned by the Script.SetTimer function
     */
     export function KillTimer( nTimerId:number ): void;
}