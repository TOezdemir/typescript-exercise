import IPizza from "./IPizza";
import OrderStatus from "./OrderStatus";

interface IOrder {
  _orderNumber: number;
  _customerName: string;

  //? Ich kann auch ein Interface in der Type Definitionen eines anderen verwenden!
  _pizzen: IPizza[];
  _status: OrderStatus;

  //* Schreibweise (wie bei Type): Methodenname: () für Parameter => Rückgabedatentype
  cancel: () => boolean;
}
export default IOrder;
