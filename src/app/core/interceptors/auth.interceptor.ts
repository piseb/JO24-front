
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = localStorage.getItem('token');
  let requestToSend = req;

  if (token) {
    const headers = req.headers.set('Authorization', 'Token ' + token);
    requestToSend = req.clone({ headers: headers });
  }

  return next(requestToSend);
}
