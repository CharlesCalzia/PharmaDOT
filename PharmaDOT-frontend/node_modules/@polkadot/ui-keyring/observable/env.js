import { BehaviorSubject } from 'rxjs';
const subject = new BehaviorSubject(false);
export const env = {
    isDevelopment: () => subject.getValue(),
    set: (isDevelopment) => {
        subject.next(isDevelopment);
    },
    subject
};
