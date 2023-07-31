local React = local TS = _G[script]
TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local Context = require(script.Parent.Context)

local function useStore()
    return React.useContext(Context)
end

return useStore
