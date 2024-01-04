// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const sizes = [19, 20, 34];

  const rooms = sizes.map((size) => new ClassRoom(size));

  return rooms;
}
export default initializeRooms;
