import { Text, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
// @Description: This component is used to display the logo
// @Props:
// size: - width and height of the logo passed to svg
// sx - styles passed to the logo
export const Logo = ({ size, sx }) => {


  return (
    <svg
      style={sx}
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "500"}
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height={size ? size : "500"}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <path
        fill="#ffab8d"
        d="M 155.722656 214.5 C 160.464844 209.757812 160.464844 201.957031 155.722656 197.214844 L 173.007812 214.5 C 177.75 219.242188 185.550781 219.242188 190.292969 214.5 C 195.035156 209.757812 195.035156 201.957031 190.292969 197.214844 L 203.292969 210.214844 C 208.035156 214.957031 215.835938 214.957031 220.578125 210.214844 C 225.320312 205.472656 225.320312 197.671875 220.578125 192.929688 L 198.933594 171.207031 C 203.675781 175.949219 211.476562 175.949219 216.21875 171.207031 C 220.960938 166.46875 220.960938 158.664062 216.21875 153.921875 L 164.289062 101.992188 L 199.011719 110.023438 C 209.105469 112.316406 218.207031 103.519531 216.144531 93.347656 L 160.15625 69.332031 C 157.097656 68.03125 153.808594 67.34375 150.519531 67.34375 L 124.363281 67.34375 C 116.789062 67.34375 109.601562 63.824219 104.9375 57.785156 L 63.632812 3.9375 L 3.902344 55.871094 L 63.328125 105.738281 C 67.152344 108.949219 69.90625 113.234375 71.207031 118.050781 L 80.460938 152.011719 C 81.609375 156.140625 83.75 159.890625 86.734375 162.871094 L 138.359375 214.5 C 143.175781 219.316406 150.902344 219.316406 155.722656 214.5 Z M 155.722656 214.5 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f49971"
        d="M 129.714844 136.636719 C 132.085938 134.265625 135.988281 134.265625 138.359375 136.636719 L 187.460938 185.742188 C 189.832031 188.113281 189.832031 192.011719 187.460938 194.382812 C 185.089844 196.753906 181.191406 196.753906 178.820312 194.382812 L 129.714844 145.28125 C 127.34375 142.910156 127.34375 139.007812 129.714844 136.636719 Z M 129.714844 136.636719 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f49971"
        d="M 147 119.351562 C 149.371094 116.980469 153.273438 116.980469 155.644531 119.351562 L 202.910156 166.621094 C 205.28125 168.992188 205.28125 172.890625 202.910156 175.261719 C 200.539062 177.632812 196.640625 177.632812 194.269531 175.261719 L 147 127.996094 C 144.628906 125.625 144.628906 121.722656 147 119.351562 Z M 147 119.351562 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f49971"
        d="M 112.429688 153.921875 C 114.800781 151.550781 118.703125 151.550781 121.074219 153.921875 L 169.105469 201.957031 C 171.476562 204.328125 171.476562 208.226562 169.105469 210.597656 C 166.734375 212.96875 162.832031 212.96875 160.464844 210.597656 L 112.429688 162.566406 C 110.058594 160.195312 110.058594 156.292969 112.429688 153.921875 Z M 112.429688 153.921875 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#e28160"
        d="M 106.925781 60 C 106.234375 59.3125 105.625 58.625 105.089844 57.859375 L 63.632812 3.9375 L 3.902344 55.871094 L 62.179688 104.820312 Z M 106.925781 60 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f49971"
        d="M 32.199219 79.65625 L 62.105469 104.820312 L 106.925781 60 C 106.234375 59.3125 105.625 58.625 105.089844 57.859375 L 82.910156 29.027344 Z M 32.199219 79.65625 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffb9a4"
        d="M 160.464844 155.757812 C 165.203125 160.5 173.007812 160.5 177.75 155.757812 L 160.464844 173.042969 C 155.722656 177.785156 155.722656 185.589844 160.464844 190.328125 C 165.203125 195.070312 173.007812 195.070312 177.75 190.328125 L 164.746094 203.332031 C 160.003906 208.074219 160.003906 215.875 164.746094 220.617188 C 169.488281 225.359375 177.289062 225.359375 182.03125 220.617188 L 203.675781 198.972656 C 198.933594 203.714844 198.933594 211.515625 203.675781 216.257812 C 208.417969 221 216.21875 221 220.960938 216.257812 L 272.894531 164.324219 L 264.863281 199.050781 C 262.570312 209.144531 271.363281 218.246094 281.535156 216.179688 L 305.550781 160.195312 C 306.851562 157.136719 307.542969 153.847656 307.542969 150.558594 L 307.542969 124.402344 C 307.542969 116.828125 311.058594 109.640625 317.101562 104.972656 L 371.023438 63.671875 L 319.089844 3.9375 L 269.222656 63.367188 C 266.011719 67.191406 261.726562 69.945312 256.910156 71.246094 L 222.949219 80.5 C 218.820312 81.644531 215.074219 83.789062 212.089844 86.769531 L 160.464844 138.398438 C 155.644531 143.214844 155.644531 150.941406 160.464844 155.757812 Z M 160.464844 155.757812 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f9cd75"
        d="M 309.914062 114.152344 C 311.519531 110.632812 313.964844 107.574219 317.101562 105.128906 L 371.023438 63.671875 L 319.089844 3.9375 L 269.222656 63.367188 C 267.691406 65.203125 265.859375 66.808594 263.867188 68.109375 Z M 309.914062 114.152344 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffab8d"
        d="M 238.324219 129.753906 C 240.695312 132.125 240.695312 136.027344 238.324219 138.398438 L 189.222656 187.5 C 186.851562 189.871094 182.949219 189.871094 180.578125 187.5 C 178.207031 185.128906 178.207031 181.226562 180.578125 178.855469 L 229.679688 129.753906 C 232.050781 127.382812 235.953125 127.382812 238.324219 129.753906 Z M 238.324219 129.753906 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffab8d"
        d="M 255.609375 147.039062 C 257.980469 149.410156 257.980469 153.3125 255.609375 155.683594 L 208.34375 202.949219 C 205.972656 205.320312 202.070312 205.320312 199.699219 202.949219 C 197.328125 200.578125 197.328125 196.679688 199.699219 194.308594 L 246.964844 147.039062 C 249.335938 144.667969 253.238281 144.667969 255.609375 147.039062 Z M 255.609375 147.039062 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffab8d"
        d="M 221.039062 112.46875 C 223.410156 114.839844 223.410156 118.742188 221.039062 121.113281 L 173.007812 169.144531 C 170.636719 171.515625 166.734375 171.515625 164.363281 169.144531 C 161.992188 166.773438 161.992188 162.871094 164.363281 160.5 L 212.394531 112.46875 C 214.765625 110.097656 218.667969 110.097656 221.039062 112.46875 Z M 221.039062 112.46875 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffab8d"
        d="M 219.203125 160.5 C 214.460938 165.242188 214.460938 173.042969 219.203125 177.785156 L 201.917969 160.5 C 197.175781 155.757812 189.375 155.757812 184.632812 160.5 C 179.890625 165.242188 179.890625 173.042969 184.632812 177.785156 L 171.628906 164.785156 C 166.886719 160.042969 159.085938 160.042969 154.34375 164.785156 C 149.601562 169.527344 149.601562 177.328125 154.34375 182.070312 L 175.988281 203.714844 C 171.246094 198.972656 163.445312 198.972656 158.703125 203.714844 C 153.960938 208.457031 153.960938 216.257812 158.703125 221 L 210.636719 272.933594 L 175.914062 264.902344 C 165.816406 262.605469 156.714844 271.402344 158.78125 281.574219 L 214.765625 305.589844 C 217.824219 306.890625 221.113281 307.578125 224.402344 307.578125 L 250.5625 307.578125 C 258.132812 307.578125 265.324219 311.097656 269.988281 317.140625 L 311.441406 371.0625 L 371.175781 319.128906 L 311.746094 269.261719 C 307.921875 266.050781 305.171875 261.765625 303.871094 256.949219 L 294.617188 222.988281 C 293.46875 218.859375 291.328125 215.109375 288.34375 212.128906 L 236.71875 160.5 C 231.746094 155.683594 224.019531 155.683594 219.203125 160.5 Z M 219.203125 160.5 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f49971"
        d="M 245.207031 238.363281 C 242.835938 240.734375 238.933594 240.734375 236.5625 238.363281 L 187.460938 189.257812 C 185.089844 186.886719 185.089844 182.988281 187.460938 180.617188 C 189.832031 178.246094 193.734375 178.246094 196.105469 180.617188 L 245.207031 229.71875 C 247.578125 232.089844 247.578125 235.992188 245.207031 238.363281 Z M 245.207031 238.363281 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f49971"
        d="M 227.921875 255.648438 C 225.550781 258.019531 221.648438 258.019531 219.277344 255.648438 L 172.011719 208.378906 C 169.640625 206.007812 169.640625 202.109375 172.011719 199.738281 C 174.382812 197.367188 178.285156 197.367188 180.65625 199.738281 L 227.921875 247.003906 C 230.292969 249.375 230.292969 253.277344 227.921875 255.648438 Z M 227.921875 255.648438 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f49971"
        d="M 262.492188 221.078125 C 260.121094 223.449219 256.21875 223.449219 253.851562 221.078125 L 205.816406 173.042969 C 203.445312 170.671875 203.445312 166.773438 205.816406 164.402344 C 208.1875 162.03125 212.089844 162.03125 214.460938 164.402344 L 262.492188 212.433594 C 264.863281 214.804688 264.863281 218.707031 262.492188 221.078125 Z M 262.492188 221.078125 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffc8bb"
        d="M 214.460938 219.242188 C 209.71875 214.5 201.917969 214.5 197.175781 219.242188 L 214.460938 201.957031 C 219.203125 197.214844 219.203125 189.410156 214.460938 184.671875 C 209.71875 179.929688 201.917969 179.929688 197.175781 184.671875 L 210.175781 171.667969 C 214.917969 166.925781 214.917969 159.125 210.175781 154.382812 C 205.433594 149.640625 197.632812 149.640625 192.890625 154.382812 L 171.171875 176.027344 C 175.914062 171.285156 175.914062 163.484375 171.171875 158.742188 C 166.429688 154 158.628906 154 153.886719 158.742188 L 101.953125 210.675781 L 109.984375 175.949219 C 112.277344 165.855469 103.484375 156.753906 93.308594 158.820312 L 69.292969 214.804688 C 67.992188 217.863281 67.304688 221.152344 67.304688 224.441406 L 67.304688 250.597656 C 67.304688 258.171875 63.789062 265.359375 57.746094 270.027344 L 3.902344 311.328125 L 55.832031 371.0625 L 105.699219 311.632812 C 108.914062 307.808594 113.195312 305.054688 118.015625 303.753906 L 151.972656 294.5 C 156.101562 293.355469 159.851562 291.210938 162.832031 288.230469 L 214.460938 236.601562 C 219.277344 231.785156 219.277344 224.058594 214.460938 219.242188 Z M 214.460938 219.242188 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#dfdfdf"
        d="M 23.328125 269.796875 C 10.402344 244.097656 3.902344 216.410156 3.902344 187.5 C 3.902344 156.523438 11.777344 125.855469 26.691406 98.855469 L 37.402344 104.746094 C 23.480469 129.984375 16.136719 158.589844 16.136719 187.5 C 16.136719 214.5 22.257812 240.351562 34.265625 264.289062 Z M 23.328125 269.796875 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#dfdfdf"
        d="M 187.460938 371.0625 C 156.484375 371.0625 125.816406 363.183594 98.816406 348.269531 L 104.707031 337.5625 C 129.945312 351.480469 158.550781 358.824219 187.460938 358.824219 C 214.460938 358.824219 240.3125 352.703125 264.25 340.695312 L 269.757812 351.632812 C 244.058594 364.558594 216.371094 371.0625 187.460938 371.0625 Z M 187.460938 371.0625 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#dfdfdf"
        d="M 348.230469 276.144531 L 337.523438 270.253906 C 351.441406 245.015625 358.785156 216.410156 358.785156 187.5 C 358.785156 160.5 352.667969 134.648438 340.660156 110.710938 L 351.597656 105.203125 C 364.523438 130.902344 371.023438 158.589844 371.023438 187.5 C 371.023438 218.476562 363.144531 249.144531 348.230469 276.144531 Z M 348.230469 276.144531 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#dfdfdf"
        d="M 270.140625 37.4375 C 244.976562 23.519531 216.371094 16.175781 187.460938 16.175781 C 160.464844 16.175781 134.613281 22.296875 110.671875 34.304688 L 105.164062 23.367188 C 130.863281 10.441406 158.550781 3.9375 187.460938 3.9375 C 218.4375 3.9375 249.109375 11.816406 276.105469 26.730469 Z M 270.140625 37.4375 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#689cda"
        d="M 65.011719 260.847656 C 63.40625 264.367188 60.957031 267.425781 57.820312 269.871094 L 3.902344 311.328125 L 55.832031 371.0625 L 105.699219 311.632812 C 107.230469 309.796875 109.066406 308.191406 111.054688 306.890625 Z M 65.011719 260.847656 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffb9a4"
        d="M 136.601562 245.246094 C 134.230469 242.875 134.230469 238.972656 136.601562 236.601562 L 185.703125 187.5 C 188.074219 185.128906 191.972656 185.128906 194.34375 187.5 C 196.714844 189.871094 196.714844 193.773438 194.34375 196.144531 L 145.242188 245.246094 C 142.871094 247.617188 138.972656 247.617188 136.601562 245.246094 Z M 136.601562 245.246094 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffb9a4"
        d="M 119.316406 227.960938 C 116.945312 225.589844 116.945312 221.6875 119.316406 219.316406 L 166.582031 172.050781 C 168.953125 169.679688 172.851562 169.679688 175.222656 172.050781 C 177.59375 174.421875 177.59375 178.320312 175.222656 180.691406 L 127.957031 227.960938 C 125.585938 230.332031 121.6875 230.332031 119.316406 227.960938 Z M 119.316406 227.960938 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffb9a4"
        d="M 153.886719 262.53125 C 151.515625 260.160156 151.515625 256.257812 153.886719 253.886719 L 201.917969 205.855469 C 204.289062 203.484375 208.1875 203.484375 210.558594 205.855469 C 212.929688 208.226562 212.929688 212.128906 210.558594 214.5 L 162.527344 262.53125 C 160.15625 264.902344 156.257812 264.902344 153.886719 262.53125 Z M 153.886719 262.53125 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#ffd683"
        d="M 284.0625 335.648438 L 311.289062 371.0625 L 371.023438 319.128906 L 332.703125 287.003906 Z M 284.0625 335.648438 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#f4c36e"
        d="M 300.046875 356.375 L 352.667969 303.753906 L 332.703125 287.003906 L 284.0625 335.648438 Z M 300.046875 356.375 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#473a37"
        d="M 367.121094 323.792969 L 375 314.386719 L 315.570312 264.519531 C 312.664062 262.070312 310.675781 258.9375 309.683594 255.265625 L 300.429688 221.304688 C 299.050781 216.179688 296.296875 211.515625 292.550781 207.691406 L 292.089844 207.234375 L 311.210938 162.644531 C 312.820312 158.820312 313.660156 154.765625 313.660156 150.558594 L 313.660156 124.402344 C 313.660156 118.742188 316.335938 113.3125 320.847656 109.867188 L 374.769531 68.414062 L 367.273438 58.703125 L 313.355469 100.15625 C 311.746094 101.378906 310.21875 102.832031 308.917969 104.363281 L 272.816406 68.261719 C 273.199219 67.878906 273.507812 67.496094 273.886719 67.113281 L 323.757812 7.6875 L 314.425781 0.0390625 L 264.558594 59.464844 C 262.109375 62.371094 258.972656 64.359375 255.304688 65.355469 L 221.34375 74.609375 C 216.21875 75.988281 211.554688 78.738281 207.730469 82.488281 L 207.269531 82.945312 L 162.679688 63.824219 C 158.855469 62.21875 154.804688 61.378906 150.597656 61.378906 L 124.4375 61.378906 C 118.78125 61.378906 113.347656 58.703125 109.90625 54.1875 L 68.453125 0.269531 L 58.738281 7.761719 L 74.726562 28.566406 L 31.816406 71.472656 L 7.800781 51.207031 L 0 60.535156 L 59.429688 110.40625 C 62.335938 112.851562 64.324219 115.988281 65.316406 119.660156 L 74.570312 153.617188 C 75.949219 158.742188 78.703125 163.40625 82.449219 167.230469 L 82.910156 167.691406 L 63.789062 212.28125 C 62.179688 216.105469 61.339844 220.160156 61.339844 224.363281 L 61.339844 250.523438 C 61.339844 256.183594 58.664062 261.613281 54.152344 265.054688 L 0.230469 306.507812 L 7.726562 316.222656 L 61.644531 274.769531 C 63.253906 273.542969 64.78125 272.089844 66.082031 270.5625 L 102.183594 306.660156 C 101.800781 307.042969 101.492188 307.425781 101.113281 307.808594 L 51.246094 367.238281 L 60.5 374.960938 L 110.367188 315.535156 C 112.8125 312.628906 115.949219 310.640625 119.621094 309.644531 L 153.578125 300.390625 C 158.703125 299.011719 163.371094 296.261719 167.195312 292.511719 L 167.652344 292.054688 L 212.242188 311.175781 C 216.066406 312.78125 220.121094 313.621094 224.328125 313.621094 L 250.484375 313.621094 C 256.144531 313.621094 261.574219 316.296875 265.015625 320.8125 L 306.46875 374.730469 L 316.183594 367.238281 L 308.152344 356.835938 L 353.050781 311.9375 Z M 224.554688 86.386719 L 258.515625 77.132812 C 259.96875 76.75 261.34375 76.214844 262.722656 75.679688 L 302.722656 115.683594 C 301.882812 118.511719 301.421875 121.496094 301.421875 124.554688 L 301.421875 150.710938 C 301.421875 153.234375 300.886719 155.605469 299.96875 157.976562 L 282.761719 198.132812 L 273.582031 188.953125 L 278.9375 165.855469 C 279.546875 163.179688 278.324219 160.425781 275.953125 159.125 C 273.582031 157.824219 270.601562 158.207031 268.6875 160.117188 L 256.757812 172.050781 L 248.113281 163.40625 L 260.042969 151.476562 L 251.402344 142.832031 L 239.394531 154.839844 C 236.183594 152.242188 232.203125 150.863281 228 150.863281 C 227.308594 150.863281 226.621094 150.941406 225.933594 150.941406 L 242.757812 134.113281 L 234.117188 125.472656 L 211.707031 147.726562 C 208.722656 145.738281 205.207031 144.667969 201.535156 144.667969 C 199.929688 144.667969 198.398438 144.898438 196.945312 145.28125 L 225.398438 116.828125 L 216.753906 108.1875 L 172.777344 152.164062 C 169.945312 150.253906 166.660156 149.257812 163.371094 149.105469 C 163.140625 148.492188 163.0625 147.804688 163.0625 147.117188 C 163.0625 145.511719 163.675781 143.980469 164.824219 142.757812 L 216.449219 91.128906 C 218.667969 88.835938 221.496094 87.230469 224.554688 86.386719 Z M 82.296875 38.203125 L 98.742188 59.542969 L 61.800781 96.484375 L 41.300781 79.277344 Z M 77.09375 116.445312 C 75.871094 112.085938 73.808594 108.109375 70.902344 104.746094 L 107.382812 68.261719 C 112.429688 71.628906 118.398438 73.539062 124.515625 73.539062 L 150.671875 73.539062 C 153.195312 73.539062 155.566406 74.074219 157.9375 74.992188 L 198.09375 92.203125 L 188.914062 101.378906 L 165.816406 96.023438 C 163.140625 95.414062 160.386719 96.636719 159.085938 99.007812 C 157.785156 101.378906 158.167969 104.363281 160.082031 106.273438 L 172.011719 118.207031 L 163.371094 126.847656 L 151.4375 114.917969 L 142.796875 123.558594 L 154.804688 135.566406 C 152.203125 138.78125 150.824219 142.757812 150.824219 146.964844 C 150.824219 147.652344 150.902344 148.339844 150.902344 149.027344 L 134.074219 132.203125 L 125.433594 140.84375 L 144.25 159.660156 L 135.527344 168.378906 L 116.714844 149.5625 L 109.21875 157.058594 C 104.476562 153.082031 98.207031 151.398438 92.085938 152.625 C 90.558594 152.929688 89.257812 153.769531 88.339844 155.070312 C 87.421875 153.617188 86.734375 152.011719 86.273438 150.328125 Z M 115.109375 165.242188 L 126.886719 177.023438 L 112.738281 191.171875 L 115.949219 177.175781 C 116.867188 173.199219 116.5625 168.992188 115.109375 165.242188 Z M 150.367188 288.613281 L 116.410156 297.867188 C 114.957031 298.25 113.578125 298.785156 112.203125 299.320312 L 72.199219 259.316406 C 73.042969 256.488281 73.5 253.503906 73.5 250.445312 L 73.5 224.289062 C 73.5 221.765625 74.035156 219.394531 74.953125 217.023438 L 97.441406 164.554688 C 99.121094 164.859375 100.730469 165.625 101.953125 166.925781 C 103.941406 168.914062 104.707031 171.667969 104.019531 174.421875 L 95.988281 209.144531 C 95.375 211.820312 96.597656 214.574219 98.96875 215.875 C 101.339844 217.175781 104.324219 216.792969 106.234375 214.882812 L 158.167969 162.949219 C 160.539062 160.578125 164.441406 160.578125 166.8125 162.949219 C 167.957031 164.097656 168.570312 165.625 168.570312 167.308594 C 168.570312 168.914062 167.957031 170.445312 166.8125 171.667969 L 114.878906 223.601562 L 123.519531 232.242188 L 197.097656 158.664062 C 198.246094 157.519531 199.777344 156.90625 201.457031 156.90625 C 203.140625 156.90625 204.59375 157.519531 205.816406 158.664062 C 206.964844 159.8125 207.578125 161.34375 207.578125 163.023438 C 207.578125 164.707031 206.964844 166.160156 205.816406 167.382812 L 132.242188 240.960938 L 140.882812 249.605469 L 201.457031 189.03125 C 203.828125 186.660156 207.730469 186.660156 210.101562 189.03125 C 211.25 190.175781 211.859375 191.707031 211.859375 193.390625 C 211.859375 194.996094 211.25 196.523438 210.101562 197.75 L 149.527344 258.324219 L 158.167969 266.964844 L 201.457031 223.675781 C 202.605469 222.53125 204.136719 221.917969 205.816406 221.917969 C 207.5 221.917969 208.953125 222.53125 210.175781 223.675781 C 211.324219 224.824219 211.9375 226.355469 211.9375 228.035156 C 211.9375 229.71875 211.324219 231.171875 210.175781 232.394531 L 158.472656 283.871094 C 156.257812 286.164062 153.425781 287.769531 150.367188 288.613281 Z M 250.484375 301.460938 L 224.328125 301.460938 C 221.804688 301.460938 219.433594 300.925781 217.0625 300.007812 L 176.90625 282.796875 L 186.085938 273.621094 L 209.183594 278.972656 C 209.640625 279.050781 210.101562 279.128906 210.558594 279.128906 C 212.777344 279.128906 214.84375 277.980469 215.914062 275.992188 C 217.214844 273.621094 216.832031 270.636719 214.917969 268.726562 L 202.988281 256.792969 L 211.628906 248.152344 L 223.5625 260.082031 L 232.203125 251.441406 L 220.195312 239.433594 C 222.796875 236.21875 224.175781 232.242188 224.175781 228.035156 C 224.175781 227.347656 224.097656 226.660156 224.097656 225.972656 L 240.925781 242.796875 L 249.566406 234.15625 L 220.273438 204.863281 C 222.875 201.648438 224.25 197.671875 224.25 193.464844 C 224.25 192.777344 224.175781 192.089844 224.175781 191.402344 L 258.285156 225.511719 L 266.929688 216.871094 L 223.636719 173.578125 C 222.492188 172.433594 221.878906 170.902344 221.878906 169.21875 C 221.878906 167.539062 222.492188 166.085938 223.636719 164.859375 C 224.785156 163.714844 226.316406 163.101562 228 163.101562 C 229.605469 163.101562 231.132812 163.714844 232.359375 164.859375 L 283.984375 216.488281 C 286.203125 218.707031 287.886719 221.535156 288.726562 224.671875 L 297.980469 258.628906 C 299.664062 264.671875 303.027344 269.949219 307.847656 274.003906 L 323.832031 287.464844 L 284.824219 326.472656 L 274.882812 313.46875 C 268.917969 305.972656 259.890625 301.460938 250.484375 301.460938 Z M 300.65625 347.121094 L 292.246094 336.183594 L 333.164062 295.265625 L 343.71875 304.136719 Z M 300.65625 347.121094 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#473a37"
        d="M 26.691406 98.855469 C 11.777344 125.855469 3.902344 156.523438 3.902344 187.5 C 3.902344 216.410156 10.402344 244.097656 23.328125 269.796875 L 34.265625 264.289062 C 22.257812 240.351562 16.136719 214.5 16.136719 187.5 C 16.136719 158.589844 23.480469 129.984375 37.402344 104.820312 Z M 26.691406 98.855469 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#473a37"
        d="M 187.460938 358.824219 C 158.550781 358.824219 129.945312 351.480469 104.78125 337.5625 L 98.894531 348.269531 C 125.816406 363.183594 156.484375 371.0625 187.460938 371.0625 C 216.371094 371.0625 244.058594 364.558594 269.757812 351.632812 L 264.25 340.695312 C 240.3125 352.703125 214.460938 358.824219 187.460938 358.824219 Z M 187.460938 358.824219 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#473a37"
        d="M 348.230469 276.144531 C 363.144531 249.144531 371.023438 218.476562 371.023438 187.5 C 371.023438 158.589844 364.523438 130.902344 351.597656 105.203125 L 340.660156 110.710938 C 352.667969 134.648438 358.785156 160.5 358.785156 187.5 C 358.785156 216.410156 351.441406 245.015625 337.523438 270.179688 Z M 348.230469 276.144531 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
      <path
        fill="#473a37"
        d="M 187.460938 16.175781 C 216.371094 16.175781 244.976562 23.519531 270.140625 37.4375 L 276.03125 26.730469 C 249.109375 11.816406 218.4375 3.9375 187.460938 3.9375 C 158.550781 3.9375 130.863281 10.441406 105.164062 23.367188 L 110.671875 34.304688 C 134.613281 22.296875 160.464844 16.175781 187.460938 16.175781 Z M 187.460938 16.175781 "
        fill-opacity="1"
        fill-rule="nonzero"
      />
    </svg>
  );
};


// @Description: This component is used to display the logo and the name of the
// application changes depending on the current theme navigates to the home page on click
// @Props:
// size: - width and height of the logo passed to svg
// sx - styles passed to the logo
// navigate - shoud user be redirected to home page on click default is true
export const LogoText = ({ size, sx }, navigate = true) => {
  // navigate function from useNavigate hook used to redirect the user
  const navigatefunc = useNavigate();

  // Get current theme
  // it will be used to change the logo and the name of the application colors
  const theme = useMantineTheme();


  return (
    <Text
      sx={{
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "25px",
        color: theme.colorScheme == "light" ? theme.colors.dark[7] : theme.colors.indigo[1]
      }}
      onClick={() => navigate && navigatefunc("/")}
    >
      <Logo size={size || "45px"} />
      Parsedia
    </Text>
  );
};