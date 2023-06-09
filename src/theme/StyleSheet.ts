import { Breakpoints } from "@displaykit/responsive_styles"

// Generics
type ResponsiveProprerty<Type> = Partial<Record<Breakpoints, Type>>

export default interface StyleSheet {
    // fontFamily?: ResponsiveProprerty<string> | string, // <-- exemplo para autocomplete
    // ...
    [key: string]: any // para aceitar qualquer valor que funcione
}