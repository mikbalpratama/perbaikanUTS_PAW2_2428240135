const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  durasi  : String,
  catatan : String,
}, { _id: false });

const layanansalonSchema = new mongoose.Schema({
  kodelayanan: { type: String, required: [true, 'kodelayanan wajib diisi'], trim: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], unique: true, trim: true },
  harga: {type: Number, required: [true, 'harga wajib diisi'], trim: true},
  kategori:{type: String, required: [true, 'kategori wajib diisi'], trim: true},
  info: infoSchema,
  stylistId: { type: mongoose.Schema.Types.ObjectId, ref: 'stylist' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('layanansalonn', layanansalonSchema);