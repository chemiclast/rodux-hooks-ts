local React = require(script.Parent.Parent.React)
local Context = require(script.Parent.Context)

local function useStore()
    return React.useContext(Context)
end

return useStore
