import http from "../http-common";

class BookingFee {
  createBookingFee(data: any) {
    return http.post(`/api/v2/booking-fees`, data);
  }

  getHospitalBookingFee(hospitalId: string) {
    return http.get(`/api/v2/booking-fees/${hospitalId}`);
  }

  updateBookingFee(bookingFeeId: string, data: any) {
    return http.put(`/api/v2/booking-fees/${bookingFeeId}`, data);
  }
}

export default new BookingFee();
