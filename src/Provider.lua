local TS = _G[script]
local React = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local Context = require(script.Parent.Context)

local e = React.createElement

local function Provider(props)
	local context = props.context or Context

	return e(context.Provider, {
		value = props.store,
	}, props.children)
end

return Provider
