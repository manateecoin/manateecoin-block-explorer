var api = 'http://blockexplorer.mananet.net:13777';
var blockTargetInterval = 60;
var coinUnits = 100000000;
var symbol = 'MTC';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "mtc": [
		["pool.mananet.net", "http://pool.mananet.net:8117"]
    ]
};