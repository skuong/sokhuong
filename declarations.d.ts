declare module "*.glsl?raw" {
  const content: string
  export default content
}

// For autocomplete
declare module "*.glsl" {
  const content: string
  export default content
}
