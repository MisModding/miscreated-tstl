const playerName = "Theros"

// find the player
const player: Player = System.GetEntityByName('Theros')
// fetch their Pos
let spawnPos = player.GetPos()
// add a forward offset, so as to spawn infront of player
spawnPos.x += 10
// spawn a Vehicle
System.SpawnEntity({
    name: `${playerName}-Beetle`,
    class: "beetle",
    position: spawnPos
})
let clanId = player.player.GetClanId()

// this is needed to stop typescript exporting all our locals as globals (in lua this just returns an empty table)
export { player };