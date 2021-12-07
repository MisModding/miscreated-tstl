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

declare function OnInit(): void

declare function OnInitPreLoaded(): void

declare function OnInitAllLoaded(): void

/**
 * write a message to the Log
 * @param fmtstr your message, can contain patterns for use with string.format
 * @param vars any passed vars will be passed to string.format
*/
declare function Log(fmtstr: string, ...vars: any[]): void

/**
 * write a warning to the Log
 * @param fmtstr your message, can contain patterns for use with string.format
 * @param vars any passed vars will be passed to string.format
*/
declare function LogWarning(fmtstr: string, ...vars: any[]): void

/**
 * write an error to the Log
 * @param fmtstr your message, can contain patterns for use with string.format
 * @param vars any passed vars will be passed to string.format
*/
declare function LogError(fmtstr: string, ...vars: any[]): void

declare function FindInTable(table: LuaTable<any, any>, key: string, value: any): any
declare function IsInsideTable(table: LuaTable<any, any>, value: any): boolean
declare function RemoveFromTable(table: LuaTable<any, any>, value: any): void
declare function InsertIntoTable(table: LuaTable<any, any>, value: any): void