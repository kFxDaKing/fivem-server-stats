
resource_manifest_version  '44febabe-d386-4d18-afbe-5e627f4af937'

ui_page "nui/ui.html"

files {
	"nui/ui.html",
	"nui/ui.js", 
	"nui/ui.css"
}

client_scripts {"config.lua", "cl_config.lua", "client.lua"}
server_scripts {"config.lua", "sv_config.lua", "server.lua"}

exports {
}

server_exports {
}