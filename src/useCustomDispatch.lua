local React = require(game:GetService("ReplicatedStorage").rbxts_include.node_modules["@rbxts"].RoactTS)

local function useCustomDispatch(context)
	local store = React.useContext(context)

    return function(action)
        store:dispatch(action)
    end
end

return useCustomDispatch
