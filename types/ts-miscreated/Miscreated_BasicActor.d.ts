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

declare class BasicActor extends CE3Entity {
    AnimationGraph: "humanfullbody.xml"
    UpperBodyGraph: "humanupperbody.xml"

    Properties:{
        fileModel: "Objects/Characters/players/male/human_male.cdf"
        fileHitDeathReactionsParamsDataFile: "Libs/HitDeathReactionsData/HitDeathReactions_MP.xml"
        physicMassMult: 1
        bEnableHitReaction: 1
        groupid: 0
        aicharacter_character: "Player"
        Perception: {
            sightrange: 50
        }
        Damage: {
            health: 100
            fileBodyDestructibility: "Libs/BodyDamage/BodyDestructibility_Default.xml"
            fileBodyDamage: "Libs/BodyDamage/BodyDamage_MP.xml"
            FallSleepTime: 6
            bLogDamages: 0
            fileBodyDamageParts: "Libs/BodyDamage/BodyParts_HumanMaleShared.xml"
        }
        maxFireDuration: 10
        fileModelFemale: "Objects/Characters/players/female/human_female.cdf"
        Physics: {
            CollisionFiltering: {
                collisionType: {
                    bT_gcc_ai: 0
                    bT_gcc_player_body: 0
                    bT_gcc_trap: 0
                    bT_gcc_player_capsule: 0
                    bT_collision_class_soft: 0
                    bT_collision_class_wheeled: 0
                    bT_collision_class_particle: 0
                    bT_collision_class_articulated: 0
                    bT_gcc_ragdoll: 0
                    bT_gcc_vehicle: 0
                    bT_gcc_vtol: 0
                    bT_collision_class_living: 0
                    bT_collision_class_terrain: 0
                    bT_gcc_rigid: 0
                }
                collisionIgnore: {
                    bT_gcc_ai: 0
                    bT_gcc_player_body: 0
                    bT_gcc_trap: 0
                    bT_gcc_player_capsule: 0
                    bT_collision_class_soft: 0
                    bT_collision_class_wheeled: 0
                    bT_collision_class_particle: 0
                    bT_collision_class_articulated: 0
                    bT_gcc_ragdoll: 0
                    bT_gcc_vehicle: 0
                    bT_gcc_vtol: 0
                    bT_collision_class_living: 0
                    bT_collision_class_terrain: 0
                    bT_gcc_rigid: 0
                }
            }

            CharacterSounds: {
                footstepEffect: "footstep_player"
                footstepIndGearAudioSignal_Walk: "Player_Footstep_Gear_Walk"
                foleyEffect: "foley_player"
                bFootstepGearEffect: 0
                footstepIndGearAudioSignal_Run: "Player_Footstep_Gear_Run"
                remoteFootstepEffect: "footstep_player"
            }
            esFaction: "Players"
            commrange: 40
            esKytheraProfile: "Player"
            soclasses_SmartObjectClass: "Player"
            Rendering: {
                bWrinkleMap: 0
            }
            equip_EquipmentPack: ""
        }
    };

    tempSetStats:
        {
        };

    Server: {};
    Client: {};

    grabParams: {
        collisionFlags: 0; 			//  Geom_colltype_player
        holdPos: { x: 0.0, y: 0.4, z: 1.25 };	//  Position where grab is holded
        grabDelay: 0,					//  If IK is used, its the time delay where the limb tries to reach the object.
        followSpeed: 5.5;

        limbs: ["rightArm", "leftArm"]

        useIKRotation: 0,
    };

    IKLimbs:
        [
            [0, "rightArm", "Bip01 R UpperArm", "Bip01 R Forearm", "Bip01 R Hand", IKLIMB_RIGHTHAND],
            [0, "leftArm", "Bip01 L UpperArm", "Bip01 L Forearm", "Bip01 L Hand", IKLIMB_LEFTHAND],

            [5, "rightArmShadow", "Bip01 R UpperArm", "Bip01 R Forearm", "Bip01 R Hand", IKLIMB_RIGHTHAND],
            [5, "leftArmShadow", "Bip01 L UpperArm", "Bip01 L Forearm", "Bip01 L Hand", IKLIMB_LEFTHAND],
        ];

    bloodFlowEffectWater: ""
    bloodFlowEffect: ""
    bloodSplatWall:
        [
            "materials/decals/blood/blood_splat1",
            "materials/decals/blood/blood_splat2",
            "materials/decals/blood/blood_splat3",
            "materials/decals/blood/blood_splat4",
            "materials/decals/blood/blood_splat5",
        ];

    //  Each element of this table below is a subtable in which the first element is the decal material.
    //  It can have a property named bAnimated that if true indicates the decal is alpha-animated.
    bloodSplatGround: AnyTable;

    bloodSplatGroundDir: { x: 0, y: 0, z: -1 };

    boneIDs: {
        BONE_HUD: "Bip01 HUD"
        BONE_BIP01: "Bip01"
        BONE_ARM_L: "Bip01 L Forearm"
        BONE_HAND_L: "Bip01 L Hand"
        BONE_SPINE3: "Bip01 Spine3"
        BONE_HEAD: "Bip01 Head"
        BONE_HAND_R: "Bip01 R Hand"
        BONE_SPINE: "Bip01 Spine1"
        BONE_SPINE2: "Bip01 Spine2"
        BONE_FOOT_L: "Bip01 L Foot"
        BONE_WEAPON2: "Lweapon_bone"
        BONE_EYE_R: "eye_right_bone"
        BONE_CALF_L: "Bip01 L Calf"
        BONE_WEAPON: "weapon_bone"
        BONE_CAMERA: "Bip01 Camera"
        BONE_CALF_R: "Bip01 R Calf"
        BONE_ARM_R: "Bip01 R Forearm"
        BONE_FOOT_R: "Bip01 R Foot"
        BONE_EYE_L: "eye_left_bone"
    }

    actorStats: AnyTable;

    particleEffects:
        {
            waterJumpSplash: "collisions.small.water"
        };
}
