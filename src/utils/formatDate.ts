const formatDate = (date: string) =>{
    const dateObeject = new Date(date);
    const day = dateObeject.getDay() > 9 ? dateObeject.getDay() : `0${dateObeject.getDay()}` ;
    const month = dateObeject.getMonth() +1 > 9 ? dateObeject.getMonth() +1 : `0${dateObeject.getMonth() +1}`;
    const year = dateObeject.getFullYear();

    return `${day}/${month}/${year}`;
};

export default formatDate;