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


declare type entityId = LuaUserdata;
declare type timerId = LuaUserdata;

/** helper type: boolean presented by an integer
 *  0[False]
 *  1[True]
*/
type numBoolean = 0 | 1;

/** Various Surface Types used by CryEngine */
declare type sSurfaceType =
    "mat_water" | "mat_ocean_water" | "mat_puddle_water" | "mat_pristine_water" | "mat_clean_water" |
    "clean_water" | "mat_irradiated_water" | "mat_contaminated_water" | "mat_wood_harvest" | "mat_metal_harvest" |
    "mat_rock_harvest" | "mat_iron_harvest" | "mat_coal_harvest" | "mat_pyrite_harvest"

/** InverseKinematics RightHand Limb*/
declare type IKLIMB_RIGHTHAND = 1;
/** InverseKinematics LeftHand Limb*/
declare type IKLIMB_LEFTHAND = 2;

/** Vector Coordinates in X,Y */
declare type vector = {
    x: number,
    y: number
}

/** Vector3 Coordinates in X,Y,Z */
declare type vector3 = {
    x: number,
    y: number,
    z: number
}

/**
 * Generic Entity Spawn Params
 */
declare interface e_spawnParams {
    name?: string;
    class: string;
    archtype?: string;
    position: vector3;
    orientation?: number;
    scale?: number;
    properties?: any;
    propertiesInstance?: any;
    flags?: number;
}