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

declare class CE3Entity {
    Properties: {
        object_Character?: string,
        sAnimation?: string,
        sDestroyedEffect?: string,
        fHealth?: number,

        Physics?: {
            /** True if this Entity is a RidgidBody */
            bRigidBody?: numBoolean;
            /** True if this RidgidBody is Active*/
            bRigidBodyActive?: numBoolean;
            /** True if RidgidBody after Death*/
            bRigidBodyAfterDeath?: numBoolean;
            bResting?: numBoolean;
            /** This Entities Density */
            Density?: number;
            /** This Entities Mass */
            Mass?: number;
        },
    }
    Editor?: {
        /** CGF model which the Editor render over any instance of the entity. */
        Model?: string;
        /** Indicates if the Editor draw the bounding box of the entity when it is selected. */
        ShowBounds?: numBoolean;
        AbsoluteRadius?: number;
        /** BMP icon drawn over the entity. */
        Icon?: string;
        /** When true, the icon will be drawn on top of the entity, otherwise the icon will be drawn just under it. */
        IconOnTop?: numBoolean;
        DisplayArrow?: numBoolean;
        Links?: any;
    }

    /** Called after the entity was created by the entity system */
    OnSpawn?(): void

    /** Called when the entity is destroyed. (just like OnShutDown() gets called) */
    OnDestroy?(): void

    /** Called when the entity gets initialized via ENTITY_EVENT_INIT as well as when its ScriptProxy gets initialized */
    OnInit?(): void

    /** Called when the entity is destroyed. (just like OnDestroy() gets called) */
    OnShudown?(): void

    /** Mostly called when Editor wants to Reset the state. */
    OnReset?(): void

    /** Editor will call this function when the user is changing one of the properties. */
    OnPropertyChange?(): void

    /** Called during Entity.GotoState() after the state has just been changed (i. e. after OnEndState() got called on the old state). */
    OnBeginState?(): any;

    /** Called during Entity.GotoState() while the old state is still active and before OnBeginState() gets called on the new state. */
    OnEndState?(): any;

    /** Called periodically by the engine on the entity's current state (presuming the "es_UpdateScript cvar is set to 1) */
    OnUpdate?(): any;

    /** Called whenever a timer has expired. 2 Integer parameters will be passed in: 1. the timerId provided by Entity.SetTimer() , 2. the period in milliseconds at which the timer runs. */
    OnTimer?(): any;

    /** Called when the entity has fully entered an area or trigger. Parameters passed in: 1. areaId (int), 2. fade fraction (float) (this is always 1.0f since we've fully entered the area, and 0.0f in case of trigger boxes) */
    OnEnterArea?(): any;

    /** Called when the entity has fully left an area or trigger. Parameters passed in: 1. areaId (int), 2. fade fraction (float) (this is always 0.0f) */
    OnLeaveArea?(): any;

    /** Called when the entity comes inside the range of an area. Works with Box-, Sphere- and Shape-Areas if a sound volume entity is connected. Takes OuterRadius of sound entity into account to determine when an entity is near the area. */
    OnEnterNearArea?(): any;

    /** Called when the entity moves. Works with Box-, Sphere- and Shape-Areas if a sound volume entity is connected. Takes OuterRadius of sound entity into account to determine when an entity is near the area. */
    OnMoveNearArea?(): any;

    /** Called when the entity leaves the range of an area. Works with Box-, Sphere- and Shape-Areas if a sound volume entity is connected. Takes OuterRadius of sound entity into account to determine when an entity is near the area. */
    OnLeaveNearArea?(): any;

    /** Called while the entity has recently entered an area and fading is still in progress. Parameters passed in: 1. areaId (int), 2. fade fraction (float) */
    OnProceedFadeArea?(): any;

    /** Called when a child entity got attached to the entity. Parameters: script table of that child entity */
    OnBind?(): any;

    /** Called when a child entity is about to get detached from the entity. Parameters: script table of that child entity */
    OnUnBind?(): any;

    /** Called whenever the entity gets moved through the world. Parameters: none */
    OnMove?(): any;

    /** Called when a collision between the entity and something else occurred. Parameters: script table that holds various information of the collision. */
    OnCollision?(): any;

    /** Called when a sound has stopped. Parameters: soundId (int) (this is an ID that the caller provided when he requested to play a sound) */
    OnSoundDone?(): any;

    /** Called when a new level has been started. */
    OnStartLevel?(): any;

    /** Called when the game has been started. */
    OnStartGame?(): any;

    OnPhysicsBreak?(): any;
}