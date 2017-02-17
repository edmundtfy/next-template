import Reflux from 'reflux';

const ThreadActions = Reflux.createActions([
  'getThreads'
]);

class ThreadStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      well: 'crap'
    };
    this.listenables = ThreadActions;
  }

  getThreads() {
    console.log('called getTHreadss, gonna log this')
    console.log(this);
    this.setState(s => {
      s.well = 'shit';
      return s;
    })
  }
}

export default JobStore;
