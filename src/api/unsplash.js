import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID OFbzPIkXT3mkZcp8ZD9bUUoiyhReFh2qCbDCp_QDXlc'
  }
})