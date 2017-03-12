/**
 * Created by hannest on 3/9/17.
 */
function _window():any{
  return window;
}

export class WindowReference {
  public static get():any{
    return _window();
  }
}
