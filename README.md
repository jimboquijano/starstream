# Starstream

A lightweight and realistic 3D tunnel starstream animation with smooth trails and perspective.

Stars appear as circles in front with trails tapering toward the back, giving a dynamic 3D depth effect. Infinite trails create subtle texture.

## Usage

```html
<canvas id="starstream-bg"></canvas>

<script type="module">
  import Starstream from 'starstream'

  const stream = new Starstream('starstream-bg', {
    numStars: 200, // Total number of stars (default: 200)
    defaultSpeed: 7, // Speed of stars (default: 7)
    baseColor: '#0f172a', // Canvas background color (default: '#000')
    starColor: '#fff', // Star color for trails and head (default: '#fff')
    minRadius: 100, // Minimum distance from center where stars spawn (default: 100)
    fadeStartDistance: 1400, // Distance where stars start to fade in (default: 1400)
    fullAlphaDistance: 300 // Distance where stars are fully opaque (default: 300)
  })
</script>
```

## Options

| Option              | Type   | Default  | Description                                                                  |
| ------------------- | ------ | -------- | ---------------------------------------------------------------------------- |
| `numStars`          | number | `200`    | Total number of stars generated                                              |
| `defaultSpeed`      | number | `7`      | Speed at which stars move toward the camera                                  |
| `baseColor`         | string | `'#000'` | Base canvas color; trails use an alpha blend automatically for smooth motion |
| `starColor`         | string | `'#fff'` | Color of the star heads and trails                                           |
| `minRadius`         | number | `100`    | Minimum radius from the center where stars are allowed to spawn              |
| `fadeStartDistance` | number | `1400`   | Distance from the camera where stars start becoming visible (farthest fade)  |
| `fullAlphaDistance` | number | `300`    | Distance from the camera where stars become fully opaque (nearest fade)      |

## Demo

[https://jimboquijano.github.io/](https://jimboquijano.github.io/)

## License

MIT © Jimbo Quijano
