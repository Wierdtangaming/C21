function isTouching(rect_moving,rect_fixed) {
    if (rect_moving.x - rect_fixed.x < rect_moving.width/2 + rect_fixed.width/2 && 
      rect_fixed.x - rect_moving.x < rect_moving.width/2 + rect_fixed.width/2 &&
      rect_moving.y - rect_fixed.y < rect_moving.height/2 + rect_fixed.height/2 && 
      rect_fixed.y - rect_moving.y < rect_moving.height/2 + rect_fixed.height/2 
     ) {
    return true;
  }
  else {
    return false;
  }
}