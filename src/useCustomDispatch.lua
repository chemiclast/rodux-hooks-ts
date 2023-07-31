local React = local TS = _G[script]
TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))

local function useCustomDispatch(context)
	local store = React.useContext(context)

    return function(action)
        store:dispatch(action)
    end
end

return useCustomDispatch
