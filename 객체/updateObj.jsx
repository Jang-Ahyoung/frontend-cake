export default function UpdateObj() {
  const [data, setData] = useState({
    id: '187630',
    keyword: ['javascript', 'object'],
    text: 'the sample text',
  });
  const [sample, setSample] = usestate({
    id: '',
    text: '',
  });

  // 부분 업데이트
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // 전체 업데이트
  const handleSample = (e) => {
    e.preventDefault();
    setSample({
      keyword: data.keyword,
      text: data.text,
    });
  };

  return (
    <div>
      <input name="id" onChange={handleChange} />
      <input name="keyword" onChange={handleChange} />
      <input name="text" onChange={handleChange} />
    </div>
  );
}
