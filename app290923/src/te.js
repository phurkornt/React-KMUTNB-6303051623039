

    <div className="form-group mb-3">
    <label htmlFor="price">ราคาสินค้า *</label>
    <input type="number" id="price" name="price" min="0" step="any"
    className="form-control form-control-sm"
    {...register('price', {validate: value => parseFloat(value) > 0}) } />
    {errors.price && <div style={err}>……………………………………………………</div>}
    </div>
    <div className="form-group mb-3">
    <label htmlFor="detail">รายละเอียดสินค้า *</label>
    <textarea id="detail" name="detail" rows="2" maxLength="250"
    className="form-control form-control-sm"
    {…………………..('detail', { required: true, minLength: 1, maxLength: 200})}>
    </textarea>
    {…………………………………………………………………………………………………………}
    </div>


    <div className="……………………………………">
    <label htmlFor="price">วันที่เพิ่มสินค้า *</label>
    <input type="…………….." id="dateAdded" name="dateAdded"
    className="…………………………………………………………………"/>
    </div>
    <div className="form-group mb-3">
    <label htmlFor="file" className="form-label">ภาพสินค้า * (ไม่เกิน 3 ไฟล์ 
    ขนาดสูงสุด 300 KB/ไฟล์)</label>
    <input type="…………….." id="file" accept="image/*"
    className="form-control form-control-sm" ref={……………} multiple/>
    </div>


    <div>…………………………….</div>
    {
            opts.map((opt, i) => {
                return (
                    <div className="form-check form-check-inline mb-2">
                        <input type="………………………" id={'opt' + i} value={opt}
                            className="form-check-input" />
                        <label htmlFor={'opt' + i} className="form-check-label">{……….}</label>
                    </div>
                )
            })
        }


        <div className="text-center mt-4">
            <button className=“………………………….. btn-sm px-4">OK</button>
    </div >
    </form >
    </div >