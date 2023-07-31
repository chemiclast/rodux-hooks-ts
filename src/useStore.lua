local React =require(game:GetService("ReplicatedStorage").rbxts_include.node_modules["@rbxts"].RoactTS)
local Context = require(script.Parent.Context)

local function useStore()
    return React.useContext(Context)
end

return useStore
