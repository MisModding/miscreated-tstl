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

declare interface IPlayerMethods {
    GetActivePlotSignId(): void;
    TeleportTo(): void;
    GetSteam64Id(): void;
    SetHealth(value: number): void;
    GetHealth(): void;
    SetFood(value: number): void;
    GetFood(): void;
    SetWater(value: number): void;
    GetWater(): void;
    SetTemperature(value: number): void;
    GetTemperature(): void;
    SetRadiation(value: number): void;
    GetRadiation(): void;
    SetBleedingLevel(value: number): void;
    GetBleedingLevel(): void;
    SetPoisonType(value: number): void;
    IsPoisoned(): void;
    SetOxygen(value: number): void;
    GetOxygen(): void;
    SetStamina(value: number): void;
    GetStamina(): void;
    SetTorpidity(value: number): void;
    GetTorpidity(): void;
    SetUnconcious(value: number): void;
    IsUnconcious(): void;
    GetClanId(): void;
    GetClanData(): void;
    ResetActionable(): void;
}

declare interface Player extends BasicActor {
    player: IPlayerMethods;
}