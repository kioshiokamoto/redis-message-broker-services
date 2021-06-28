/**
 * @param {import('./types').ColorName} color
 */
export function getColorByName (color) {
  if (color === 'primary') return 'var(--primary)'
  if (color === 'secondary') return 'var(--secondary)'
  if (color === 'terciary') return 'var(--terciary)'
  if (color === 'danger') return `var(--danger)`
  if (color === 'warning') return `var(--warning)`
  if (color === 'white') return `var(--white)`
  if (color === 'dark') return `var(--dark)`
  if (color === 'black') return `var(--black)`
  if (color === 'gray') return `var(--gray)`
  if (color === 'success') return `var(--success)`
}
