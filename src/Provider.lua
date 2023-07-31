local React = require(game:GetService("ReplicatedStorage").rbxts_include.node_modules["@rbxts"].RoactTS)
local Context = require(script.Parent.Context)

local e = React.createElement

local function Provider(props)
	local context = props.context or Context

	return e(context.Provider, {
		value = props.store,
	}, props.children)
end

return Provider
