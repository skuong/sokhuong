uniform float uTime;
uniform vec3 uColor;
uniform vec2 uPointer;
uniform sampler2D uTexture;
uniform sampler2D uDisplacementTexture;
varying vec2 vUv;

void main() {
    vec4 texColor = texture2D(uTexture, vUv);
    vec4 displacementColor = texture2D(uDisplacementTexture, vUv);
    gl_FragColor.rgba = vec4(texColor.rgb, 1.0 - displacementColor.r * 2.0 + 0.2);
}
