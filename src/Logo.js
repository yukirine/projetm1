export default function Logo({ Color, Width }) {
  return (
    <svg width={Width} viewBox='0 0 592 592' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill={Color}
        d='M348.756 74.307c12.339 16.253 17.12 34.718 18.534 54.311.18 2.488.367 5.046-.002 7.488-1.186 7.838 1.757 12.315 9.182 15.823 11.592 5.477 16.451 16.084 16.78 28.585.167 6.347.411 12.374 3.124 18.425 3.136 6.995 2.854 14.667.681 22.035-.795 2.696-.465 4.713 1.1 6.959 9.883 14.19 11.246 29.919 7.866 46.341-.76 3.695-.643 7.633-2.62 11.282-3.835-.302-5.763-3.638-8.63-5.393-1.252-.765-2.349-2.169-4-1.42-1.69.769-1.475 2.502-1.383 3.964 1.366 21.834 6.455 42.389 20.77 59.715 5.304 6.42 11.936 11.168 19.55 14.36 3.926 1.645 5.573 3.675 2.946 7.407-4.178 5.935-4 11.56-.459 17.884 2.586 4.618 3.442 10.038 3.157 15.48-.247 4.688.491 9.09 2.206 13.6 4.094 10.768 1.357 19.049-8.121 25.68-8.797 6.153-19.04 8.487-29.385 10.508-9.516 1.859-19.188 1.905-28.781 2.857-1.769.175-3.882-.263-4.743 1.918-.788 1.999.531 3.505 1.609 4.98 4.771 6.532 8.53 13.51 9.652 21.665.136.987.353 1.972.381 2.963.213 7.417-1.73 9.034-8.748 7.226-13.084-3.37-25.12-8.802-35.25-17.98-1.095-.993-2.18-2.104-5.146-2.062 4.26 31.35-13.024 56.894-22.486 84.97-4.221-1.171-6.864-3.763-9.658-6.017-15.838-12.782-24.92-29.054-23.984-49.737.718-15.85 7.39-29.9 15.242-43.404 1.04-1.789 3.17-3.4 1.94-5.807-1.396-2.726-4.087-1.654-6.298-1.608-25.521.526-50.96.125-75.738-7.113-11.59-3.386-22.695-7.86-31.728-16.241-7.344-6.813-11.317-15.102-10.604-25.345.114-1.639.27-3.467-.301-4.932-5.504-14.111-2.547-27.494 3.372-40.597 1.078-2.387 1.545-4.544.955-7.155-2.96-13.112.026-25.433 5.383-37.358 6.172-13.74 14.228-26.38 23.189-38.425 2.555-3.434 4.05-6.828 3.205-11.035-1.706-8.486-.855-16.938.697-25.283.804-4.317-.257-6.469-4.514-7.763-8.03-2.44-15.646-5.882-21.404-12.289-9.927-11.045-11.437-23.918-7.967-37.847 2.65-10.638 7.485-20.306 13.254-29.496 2.674-4.26 3.731-7.9 2.509-13.308-7.22-31.93 17.406-51.188 37.575-55.44 5.277-1.112 10.724-1.783 15.867-.735 5.802 1.183 8.424-1.339 11.18-5.712 8.96-14.222 22.435-21.625 38.787-23.425 14.16-1.559 27.339 2.732 39.909 8.95 8.35 4.13 15.203 10.144 21.348 17.551m-137.47 173.256c.078 5.15-.37 10.335.98 15.403.94 3.528-.262 6.304-2.465 9.128-6.481 8.309-12.117 17.094-14.772 27.525-1.518 5.96-3.478 11.812-5.366 17.672-.68 2.11-1.327 4.764-4.628 2.697-.835 3.406-3.9 6.847-.602 9.887 2.618 2.413 2.447 4.766 1.887 7.641-.284 1.458-.273 2.985-.28 4.481-.009 1.678.02 3.473 1.822 4.321 1.615.76 2.825-.41 4.084-1.207 2.95-1.868 5.773-4.02 8.915-5.483 4.708-2.19 9.45-4.83 15.227-3.633 0 2.063-.002 3.709 0 5.355.025 17.836 7.117 32.524 19.705 44.89 2.988 2.935 5.641 2.779 8.88.746 2.376-1.49 4.038-3.976 7.352-5.094 3 10.262 10.1 15.337 20.513 16.968 10.946 1.714 17.962-3.752 23.686-11.76.778.48 1.115.602 1.326.836a22.342 22.342 0 011.576 1.931c5.51 7.68 12.973 12.22 22.2 14.113 9.794 2.008 12.98.641 18.063-7.979 1.66-2.816 2.39-6.194 4.886-8.534 3.525 2.515 6.663 5.377 10.32 7.2 4.435 2.21 5.937 5.964 7.204 10.157.13.433.605.782.963 1.124 5.346 5.109 20.002 8.17 25.121 3.228 4.53-4.374 10.172-9.552 10.682-16.735.712-10.013-1.893-19.418-6.993-28.159-1.927-3.304-4.495-6.417-5.235-11.395 9.014 5.573 16.186 13.733 27.673 11.519-.217-1.067-.166-1.658-.436-1.979a12.72 12.72 0 00-2.163-2.048c-12.182-8.952-19.257-21.364-24.151-35.318-6.003-17.118-8.024-34.935-9.513-52.854-.182-2.186-.7-4.125-3.22-4.285-2.32-.147-3.065 1.665-3.388 3.591-.85 5.076-2.073 10.132-2.4 15.244-1.071 16.668-1.884 33.229 8.26 48.174 5.682 8.37 1.798 14.767-8.517 15.387-10.484.63-10.287.596-8.552 10.75 1.085 6.352 1.68 13.632-5 16.99-9.013 4.531-18.664 8.37-29.246 5.217-3.111-.928-6.09-.966-9.32-.436-7.514 1.234-15.239.802-22.074-2.297-21.387-9.694-32.662-26.563-33.549-50.154-.51-13.565 2.887-26.387 7.62-38.934.764-2.025 1.838-3.99 1.081-6.245-2.312-6.888-1.445-14.518-5.293-21.129-1.237-2.124-.94-5.178-1.198-7.82-.145-1.49.055-3.028-.936-4.308-5.945-7.671-7.655-16.693-8.995-26.047-3.993-27.877 18.93-49.447 45.126-42.147 14.504 4.042 24.065 15.887 25.213 31.24.353 4.711 1.428 5.39 5.462 3.29 2.23-1.162 4.483-2.22 6.978-2.635 4.002-.663 5.838-2.641 6.043-7.041.342-7.346 3.03-13.986 8.677-19.045 7.128-6.387 15.363-8.99 24.912-7.138 6.48 1.258 8.132-.72 6.71-7.296-.879-4.068-2.862-7.437-5.633-10.395-5.106-5.452-6.87-5.213-10.416 1.153-4.427 7.945-9.54 15.25-17.943 19.593-3.992 2.063-6.703 2.178-10.051-2.049-16.335-20.616-47.133-27.498-69.004-15.588-14.888 8.108-27.952 18.45-38.79 31.762-11.262 13.836-19.446 28.579-19.018 47.954m94.492-175.011c21.858 8.637 35.06 25.128 42.61 46.812.999 2.867 1.053 6.296 4.053 8.329 4.424-1.842 2.973-5.322 2.794-8.538-1.783-32.008-24.87-56.76-56.521-60.995-7.382-.988-14.22.118-20.984 2.653-2.076.777-4.408 1.557-5.352 5.224 11.288 1.13 22.324 2.141 33.4 6.515m-39.584 159.684c1.294 1.35 2.701 2.073 4.294.502 1.39-1.37 1.297-2.915.42-4.571-.931-1.763-1.947-3.522-2.567-5.401-3.441-10.439 4.93-21.912 14.964-20.166-1.765 4.434-2.539 8.793 2.321 11.858 5.546 3.5 8.353-1.544 11.98-4.216 2.521 3.329 3.248 6.868 2.237 10.545-1.581 5.748 2.935 6.319 6.318 7.624 3.784 1.46 5.435-.972 6.483-4.193 4.91-15.08-6.636-34.238-26.113-33.45-21.029.85-31.938 23.18-20.337 41.468m116.133-37.086c-9.157-6.811-20.345-6.505-23.625.694 1.444 1.66 4.376.437 5.487 2.746-3.137 7.995-1.705 9.97 7.286 9.884 1.178-.011 2.262.303 2.29 1.325.187 6.558 5.615 5.887 9.614 6.986 2.885.794 4.739-.513 5.357-3.594 1.407-7.009-.991-12.688-6.41-18.041m-13.745 34.406c11.03 2.46 18.292 10.325 25.37 18.454-1.224-11.857-12.6-22.043-26.353-24.44-13.122-2.286-29.806 2.465-33.727 10.195 11.3-4.063 22.267-7.298 34.71-4.21M198.982 121.74c3.95-15.802 14.146-26.112 30.148-32.015-8.708-3.517-22.531 3.575-30.075 14.08-6.25 8.705-7.974 22.05-3.344 27.323 2.71-2.3 2.043-5.783 3.271-9.388m77.793 119.383c-.616 1.09-1.873 1.994-.645 4.288 4.358-6.423 10.877-9.169 17.644-11.564-7.12-1.377-12.215 1.822-16.999 7.276z'
        opacity='1'
      ></path>
    </svg>
  )
}
