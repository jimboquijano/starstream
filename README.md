# Starstream

A lightweight and realistic 3D tunnel starstream animation with smooth trails and perspective.

## Install

Via NPM:

```bash
npm install starstream
```

Via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/starstream@latest/dist/starstream.umd.min.js"></script>
```

## Usage

Via Module:

```html
<canvas id="starstream-bg"></canvas>

<script type="module">
  import starstream from 'starstream'

  const stream = new starstream('starstream-bg', {
    numStars: 200, // Total number of stars (default: 200)
    defaultSpeed: 7, // Speed of stars (default: 7)
    baseColor: '#0f172a', // Canvas background color (default: '#000')
    starColor: '#fff', // Star color for trails and head (default: '#fff')
    minRadius: 100, // Minimum distance from center where stars spawn (default: 100)
    maxRadius: null, // Maximum spawn radius from center (default: Math.max(width,height))
    starRadius: 1, // Base radius of each star (default: 1)
    trailLength: 4 // Number of points in the star trail (default: 4)
  })
</script>
```

Via CDN:

```html
<canvas id="starstream-bg"></canvas>

<script type="module">
  const stream = new starstream('starstream-bg', {
    numStars: 200, // Total number of stars (default: 200)
    defaultSpeed: 7, // Speed of stars (default: 7)
    baseColor: '#0f172a', // Canvas background color (default: '#000')
    starColor: '#fff', // Star color for trails and head (default: '#fff')
    minRadius: 100, // Minimum distance from center where stars spawn (default: 100)
    maxRadius: null, // Maximum spawn radius from center (default: Math.max(width,height))
    starRadius: 1, // Base radius of each star (default: 1)
    trailLength: 4 // Number of points in the star trail (default: 4)
  })
</script>
```

## Options

| Option         | Type   | Default  | Description                                                               |
| -------------- | ------ | -------- | ------------------------------------------------------------------------- |
| `numStars`     | number | `200`    | Total number of stars generated                                           |
| `defaultSpeed` | number | `7`      | Speed at which stars move toward the camera                               |
| `baseColor`    | string | `'#000'` | Base canvas color; trails are drawn over it to create smooth motion       |
| `starColor`    | string | `'#fff'` | Color of the star heads and trails                                        |
| `minRadius`    | number | `100`    | Minimum radius from the center where stars are allowed to spawn           |
| `maxRadius`    | number | `null`   | Maximum radius from center where stars can spawn (defaults to canvas max) |
| `starRadius`   | number | `1`      | Base radius of each star                                                  |
| `trailLength`  | number | `4`      | Number of points in each star's trail                                     |

## Demo

[https://jimboquijano.github.io/](https://jimboquijano.github.io/)

## License

MIT © Jimbo Quijano
