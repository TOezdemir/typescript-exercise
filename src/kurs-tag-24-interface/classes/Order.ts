import IOrder from "../interfaces/IOrder";
import IPizza from "../interfaces/IPizza";
import OrderStatus from "../interfaces/OrderStatus";

// ich bekomme beim leeren anlegen der Klasse direktr einen Fehler, dass die Eigenschaften und die Methoden fehlen.
//$ Ich kann dann den Klassennamen auswählen, die Schnellhilfe anwenden und die Implementierung durchführen.

class Order implements IOrder {
  _orderNumber: number;
  _customerName: string;
  _pizzen: IPizza[] = [];
  _status: OrderStatus;

  constructor(orderNumber: number, customerName: string, status: OrderStatus) {
    this._orderNumber = orderNumber;
    this._customerName = customerName;
    this._status = status;
  }
  cancel(): boolean {
    if (OrderStatus.Created) {
      return false;
    } else {
      this._status = OrderStatus.Cancelled;
      return true;
    }
  }
}

export default Order;
