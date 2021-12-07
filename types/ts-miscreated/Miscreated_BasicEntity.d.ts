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

declare class BasicEntity {
    __id: LuaUserdata;
    Properties: {
        Physics: {
            /** True if object should be physicalized at all. */
            bPhysicalize: numBoolean;
            /** True if rigid body, False if static. */
            bRigidBody: numBoolean;
            /** True if object can be pushed by players. */
            bPushableByPlayers: numBoolean;
            Density: number;
            Mass: number;
        }
        MultiplayerOptions: {
            bNetworked: number;
        }
    }
    OnSpawn(): void;

    /** Current Name  */
    GetName(): string;
    /** Current Position */
    GetPos(): vector3;
}