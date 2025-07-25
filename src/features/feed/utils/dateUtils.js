import moment from "moment";

const formatDate = (date) => {
    return moment(date).fromNow();
}


export default formatDate;