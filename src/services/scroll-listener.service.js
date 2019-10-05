import { debounce, keys, values } from 'lodash';

export class ScrollListenerService {
  elements = {};
  subscribers = {};
  registerListener(element) {
    if (!this.elements[element.getAttribute('data-id')]) {
      this.elements[element.getAttribute('data-id')] = element;
    }
  }

  registerSubscriber(subscriber) {
    if (!this.subscribers[subscriber.id]) {
      this.subscribers[subscriber.id] = subscriber;
    }
  }

  scrollTo(id) {
    const element = this.elements[id];
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      console.log('this.subscribers::', this.subscribers);
      values(this.subscribers).forEach(subscriber => {
        subscriber.announce(id);
      });
    }
  }

  verifyPosition = debounce((ev) => {
    keys(this.elements).forEach((key) => {
      const element = this.elements[key];
      const elementStartOffset = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const wH = window.innerHeight;
      const yScrollPosition = window.pageYOffset;
      const endBoundary = elementHeight + elementStartOffset;
      const startBoundary = elementStartOffset;
      if (key === '3') {
        console.log('yScrollPosition', {yScrollPosition, startBoundary, endBoundary});
      }
      if (yScrollPosition + wH /2 >= startBoundary && yScrollPosition + wH /2 <= endBoundary) {
        values(this.subscribers).forEach(subscriber => {
          subscriber.announce(key);
        });
      }
    });
  }, 125);

  startListening() {
    window.onscroll = (e) => {
      this.verifyPosition(e);
    }
  }
}
