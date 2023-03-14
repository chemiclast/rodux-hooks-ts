local Context = require(script.Parent.Context)
local useCustomSelector = require(script.Parent.useCustomSelector)

local function useSelector(
	selector: (state: any) -> any,
	equalityFn: ((newState: any, oldState: any) -> boolean)?
)
	return useCustomSelector(selector, equalityFn, Context)
end

return useSelector
