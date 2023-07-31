local React = require(game:GetService("ReplicatedStorage").rbxts_include.node_modules["@rbxts"].Roact)

local function defaultEqualityFn(newState, oldState)
	return newState == oldState
end

local function useCustomSelector(
	selector: (state: any) -> any,
	equalityFn: ((newState: any, oldState: any) -> boolean)?,
	context
)
	-- This value wrapper is required so the variable context of the selector function can be updated on each run --
	local selectorFunc = React.useRef()
	selectorFunc.current = selector

	local store = React.useContext(context)
	local mappedState, setMappedState = React.useState(function()
		return selector(store:getState())
	end)
	local oldMappedState = React.useRef(mappedState)

	if equalityFn == nil then
		equalityFn = defaultEqualityFn
	end

	React.useEffect(function()
		local storeChanged = store.changed:connect(function(newState, _oldState)
			local newMappedState = selectorFunc.current(newState)

			if not equalityFn(newMappedState, oldMappedState.value) then
				oldMappedState.value = newMappedState
				setMappedState(newMappedState)
			end
		end)

		return function()
			storeChanged:disconnect()
		end
	end, {})

	return mappedState
end

return useCustomSelector
