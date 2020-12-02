local weapons = {
	[1] = { ['weapon'] = 'WEAPON_REVOLVER_CATTLEMAN', ["PRICE"] = 13, ['label'] = 'Cattleman Revolver', ['AMMOlabel'] = 'revolver ammo', ["AMMOPRICE"] = 10},
	[2] = { ['weapon'] = 'WEAPON_REVOLVER_DOUBLEACTION', ["PRICE"] = 15, ['label'] = 'Double-Action Revolver', ['AMMOlabel'] = 'revolver ammo', ["AMMOPRICE"] = 10},
	[3] = { ['weapon'] = 'WEAPON_REVOLVER_SCHOFIELD', ["PRICE"] = 17, ['label'] = 'Schofield Revolver', ['AMMOlabel'] = 'revolver ammo', ["AMMOPRICE"] = 10},
	[4] = { ['weapon'] = 'WEAPON_REVOLVER_LEMAT', ["PRICE"] = 25, ['label'] = 'LeMat Revolver', ['AMMOlabel'] = 'revolver ammo', ["AMMOPRICE"] = 10},
	[5] = { ['weapon'] = 'WEAPON_PISTOL_VOLCANIC', ["PRICE"] = 25, ['label'] = 'Volcanic Pistol', ['AMMOlabel'] = 'pistol ammo', ["AMMOPRICE"] = 10},
	[6] = { ['weapon'] = 'WEAPON_PISTOL_SEMIAUTO', ["PRICE"] = 40, ['label'] = 'Semi-Automatic Pistol', ['AMMOlabel'] = 'pistol ammo', ["AMMOPRICE"] = 10},
	[7] = { ['weapon'] = 'WEAPON_PISTOL_MAUSER', ["PRICE"] = 45, ['label'] = 'Mauser Pistol', ['AMMOlabel'] = 'pistol ammo', ["AMMOPRICE"] = 10},
	[8] = { ['weapon'] = 'WEAPON_REPEATER_CARBINE', ["PRICE"] = 60, ['label'] = 'Carbine Repeater', ['AMMOlabel'] = 'repeater ammo', ["AMMOPRICE"] = 10},
	[9] = { ['weapon'] = 'WEAPON_REPEATER_WINCHESTER', ["PRICE"] = 63, ['label'] = 'Lancaster Repeater', ['AMMOlabel'] = 'repeater ammo', ["AMMOPRICE"] = 10},
	[10] = { ['weapon'] = 'WEAPON_REPEATER_EVANS', ["PRICE"] = 63, ['label'] = 'Carbine Repeater', ['AMMOlabel'] = 'repeater ammo', ["AMMOPRICE"] = 10},
	[11] = { ['weapon'] = 'WEAPON_REPEATER_HENRY', ["PRICE"] = 65, ['label'] = 'Litchfield Repeater', ['AMMOlabel'] = 'repeater ammo', ["AMMOPRICE"] = 10},
	[12] = { ['weapon'] = 'WEAPON_RIFLE_VARMINT', ["PRICE"] = 35, ['label'] = 'Varmint Rifle', ['AMMOlabel'] = 'rifle ammo', ["AMMOPRICE"] = 10},
	[13] = { ['weapon'] = 'WEAPON_RIFLE_SPRINGFIELD', ["PRICE"] = 55, ['label'] = 'Springfield Rifle', ['AMMOlabel'] = 'rifle ammo', ["AMMOPRICE"] = 20},
	[14] = { ['weapon'] = 'WEAPON_RIFLE_BOLTACTION', ["PRICE"] = 65, ['label'] = 'Bolt-Action Rifle', ['AMMOlabel'] = 'rifle ammo', ["AMMOPRICE"] = 20},
	[15] = { ['weapon'] = 'WEAPON_SNIPERRIFLE_ROLLINGBLOCK', ["PRICE"] = 75, ['label'] = 'Rolling-Block Rifle', ['AMMOlabel'] = 'rifle ammo', ["AMMOPRICE"] = 30},
	[16] = { ['weapon'] = 'WEAPON_SNIPERRIFLE_CARCANO', ["PRICE"] = 70, ['label'] = 'Carcano Rifle', ['AMMOlabel'] = 'rifle ammo', ["AMMOPRICE"] = 20},
	[17] = { ['weapon'] = 'WEAPON_SHOTGUN_SAWEDOFF', ["PRICE"] = 25, ['label'] = 'Sawed-Off Shotgun', ['AMMOlabel'] = 'shotgun ammo', ["AMMOPRICE"] = 10},
	[18] = { ['weapon'] = 'WEAPON_SHOTGUN_DOUBLEBARREL', ["PRICE"] = 33, ['label'] = 'Double-Barrel Shotgun', ['AMMOlabel'] = 'shotgun ammo', ["AMMOPRICE"] = 10},
	[19] = { ['weapon'] = 'WEAPON_SHOTGUN_PUMP', ["PRICE"] = 40, ['label'] = 'Pump-Action Shotgun', ['AMMOlabel'] = 'shotgun ammo', ["AMMOPRICE"] = 10},
	[20] = { ['weapon'] = 'WEAPON_SHOTGUN_REPEATING', ["PRICE"] = 43, ['label'] = 'Repeating Shotgun', ['AMMOlabel'] = 'shotgun ammo', ["AMMOPRICE"] = 10},
	[21] = { ['weapon'] = 'WEAPON_SHOTGUN_SEMIAUTO', ["PRICE"] = 45, ['label'] = 'Semi-Automatic Shotgun', ['AMMOlabel'] = 'shotgun ammo', ["AMMOPRICE"] = 10},
	[22] = { ['weapon'] = 'WEAPON_BOW', ["PRICE"] = 20, ['label'] = 'Hunting Bow', ['AMMOlabel'] = 'arrows', ["AMMOPRICE"] = 5},
	[23] = { ['weapon'] = 'WEAPON_LASSO', ["PRICE"] = 5, ['label'] = 'Lasso', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[24] = { ['weapon'] = 'WEAPON_MELEE_BROKEN_SWORD', ["PRICE"] = 20, ['label'] = 'Antique Sword', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[25] = { ['weapon'] = 'WEAPON_MELEE_LANTERN', ["PRICE"] = 10, ['label'] = 'Lantern', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[26] = { ['weapon'] = 'WEAPON_MELEE_HATCHET', ["PRICE"] = 15, ['label'] = 'Hatchet', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[27] = { ['weapon'] = 'WEAPON_MELEE_KNIFE', ["PRICE"] = 10, ['label'] = 'Hunting Knife', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[28] = { ['weapon'] = 'WEAPON_THROWN_THROWING_KNIVES', ["PRICE"] = 10, ['label'] = 'Throwing Knives', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[29] = { ['weapon'] = 'WEAPON_MELEE_MACHETE', ["PRICE"] = 20, ['label'] = 'Machete', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[30] = { ['weapon'] = 'WEAPON_THROWN_TOMAHAWK', ["PRICE"] = 15, ['label'] = 'Tomahawk', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[31] = { ['weapon'] = 'WEAPON_THROWN_DYNAMITE', ["PRICE"] = 50, ['label'] = 'Dynamite Sticks', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[32] = { ['weapon'] = 'WEAPON_THROWN_MOLOTOV', ["PRICE"] = 30, ['label'] = 'Fire Bottles', ['AMMOlabel'] = '', ["AMMOPRICE"] = 0},
	[33] = { ['weapon'] = 'revolver_ammo', ["PRICE"] = 10, ['label'] = 'Revolver ammo', ['AMMOlabel'] = '', ["AMMOPRICE"] = 10},
	[34] = { ['weapon'] = 'pistol_ammo', ["PRICE"] = 10, ['label'] = 'Pistol ammo', ['AMMOlabel'] = '', ["AMMOPRICE"] = 10},
	[35] = { ['weapon'] = '22_ammo', ["PRICE"] = 10, ['label'] = 'Varmint ammo', ['AMMOlabel'] = '', ["AMMOPRICE"] = 10},
	[36] = { ['weapon'] = 'rifle_ammo', ["PRICE"] = 10, ['label'] = 'Rifle ammo', ['AMMOlabel'] = '', ["AMMOPRICE"] = 15},
	[37] = { ['weapon'] = 'shotgun_ammo', ["PRICE"] = 10, ['label'] = 'Shotgun ammo', ['AMMOlabel'] = '', ["AMMOPRICE"] = 10},
	[38] = { ['weapon'] = 'repeator_ammo', ["PRICE"] = 10, ['label'] = 'Repeator ammo', ['AMMOlabel'] = '', ["AMMOPRICE"] = 10},
	[39] = { ['weapon'] = 'snipe_ammo', ["PRICE"] = 10, ['label'] = 'Sniper ammo', ['AMMOlabel'] = '', ["AMMOPRICE"] = 30},
	[40] = { ['weapon'] = 'arrows', ["PRICE"] = 10, ['label'] = 'Arrows', ['AMMOlabel'] = '', ["AMMOPRICE"] = 10},

}

local Framework = {}
TriggerEvent("redemrp_inventory:getData",function(call)
	Framework = call
end)


local code = math.random(111111,9999999)

RegisterNetEvent("gunCatalogue:getCode")
AddEventHandler("gunCatalogue:getCode", function()
	local _source = source
	TriggerClientEvent('gunCatalogue:SendCode', _source, code)
end)

function weapon2(weapon)
	for i = 1,#weapons do
		if weapons[i]['weapon'] == weapon then
			return weapons[i]
		end
	end
	return false
end

RegisterNetEvent("gunCatalogue:Purchase")
AddEventHandler("gunCatalogue:Purchase", function(data,code1)
	local _source = source
	if code == code1 then
		TriggerEvent('redem:getPlayerFromId', _source, function(user) 
			local cash = user.getMoney()
			if tonumber(data.isammo) ~= 1 then
				local weapon2 = weapon2(data.weapon)
				if weapon2 then
					if cash >= weapon2['PRICE'] then
						local ItemData = Framework.getItem(_source, GetHashKey(data.weapon))
						ItemData.AddItem(1)
						TriggerClientEvent('mythic_notify:client:SendAlert:long', _source, { type = 'success', text = 'Received '..weapon2['label']})
						user.removeMoney(weapon2['PRICE'])
					else
						TriggerClientEvent('mythic_notify:client:SendAlert:long', _source, { type = 'error', text = 'You do not have enough money to buy this weapon'})
					end
				else
					TriggerClientEvent('mythic_notify:client:SendAlert:long', _source, { type = 'error', text = 'Your trying to buy a weapon that doesnt exist'})
				end
			else
				local weapon2 = weapon2(data.weapon)
				if weapon2 then
					if cash >= weapon2['AMMOPRICE'] then
						local ItemData = Framework.getItem(_source, data.weapon)
						ItemData.AddItem(1)
						TriggerClientEvent('mythic_notify:client:SendAlert:long', _source, { type = 'success', text = 'Received '..weapon2['label']})
						user.removeMoney(weapon2['AMMOPRICE'])
					else
						TriggerClientEvent('mythic_notify:client:SendAlert:long', _source, { type = 'error', text = 'You do not have enough money to buy ammo'})
					end
				else
					TriggerClientEvent('mythic_notify:client:SendAlert:long', _source, { type = 'error', text = 'Your trying to buy ammo that doesnt exist'})
				end
			end
		end)
	end
end)


--Taken from redemrp_weaponshop made by CryptoGenics for compatability when switching over

-------- Revolver
RegisterServerEvent("RegisterUsableItem:revolver_ammo")
AddEventHandler("RegisterUsableItem:revolver_ammo", function(source)
	local _source = source
	print("hi")
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_REVOLVER_CATTLEMAN",code)
	local ItemData = Framework.getItem(_source, 'revolver_ammo', 1)
	ItemData.RemoveItem(1)
end)
-------- Pistol
RegisterServerEvent("RegisterUsableItem:pistol_ammo")
AddEventHandler("RegisterUsableItem:pistol_ammo", function(source)
	local _source = source
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_PISTOL_MAUSER",code)
	local ItemData = Framework.getItem(_source, 'pistol_ammo', 1)
	ItemData.RemoveItem(1)
end)
-------- 22 Ammo
RegisterServerEvent("RegisterUsableItem:22_ammo")
AddEventHandler("RegisterUsableItem:22_ammo", function(source)
	local _source = source
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_RIFLE_VARMINT",code)
	local ItemData = Framework.getItem(_source, '22_ammo', 1)
	ItemData.RemoveItem(1)
end)
-------- Rifle
RegisterServerEvent("RegisterUsableItem:rifle_ammo")
AddEventHandler("RegisterUsableItem:rifle_ammo", function(source)
	local _source = source
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_RIFLE_BOLTACTION",code)
	local ItemData = Framework.getItem(_source, '22_ammo', 1)
	ItemData.RemoveItem(1)
end)
-------- Shotgun Shells
RegisterServerEvent("RegisterUsableItem:shotgun_ammo")
AddEventHandler("RegisterUsableItem:shotgun_ammo", function(source)
	local _source = source
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_SHOTGUN_DOUBLEBARREL",code)
	local ItemData = Framework.getItem(_source, 'shotgun_ammo', 1)
	ItemData.RemoveItem(1)
end)

-------- Repeater
RegisterServerEvent("RegisterUsableItem:repeator_ammo")
AddEventHandler("RegisterUsableItem:repeator_ammo", function(source)
	local _source = source
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_REPEATER_EVANS",code)
	local ItemData = Framework.getItem(_source, 'repeator_ammo', 1)
	ItemData.RemoveItem(1)
end)
-------- Sniper
RegisterServerEvent("RegisterUsableItem:snipe_ammo")
AddEventHandler("RegisterUsableItem:snipe_ammo", function(source)
	local _source = source
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_SNIPERRIFLE_CARCANO",code)
	local ItemData = Framework.getItem(_source, 'snipe_ammo', 1)
	ItemData.RemoveItem(1)
end)
-------- Arrows
RegisterServerEvent("RegisterUsableItem:arrows")
AddEventHandler("RegisterUsableItem:arrows", function(source)
	local _source = source
	TriggerClientEvent('gunCatalogue:giveammo', _source, "WEAPON_BOW",code)
	local ItemData = Framework.getItem(_source, 'arrows', 1)
	ItemData.RemoveItem(1)
end)

-- Print contents of `tbl`, with indentation.
-- `indent` sets the initial level of indentation.
function tprint (tbl, indent)
	if not indent then indent = 0 end
	for k, v in pairs(tbl) do
		formatting = string.rep("  ", indent) .. k .. ": "
		if type(v) == "table" then
			print(formatting)
			tprint(v, indent+1)
		elseif type(v) == 'boolean' then
			print(formatting .. tostring(v))
		else
			print(formatting .. v)
		end
	end
end
