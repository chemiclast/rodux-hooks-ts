local React = require(script.Parent.Parent.React)

local function useCustomDispatch(context)
	local store = React.useContext(context)

    return function(action)
        store:dispatch(action)
    end
end

return useCustomDispatch
