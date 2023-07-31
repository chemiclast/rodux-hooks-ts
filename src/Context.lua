local TS = _G[script]
local React = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))

local Context = React.createContext()

return Context
