const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/videos', (req, res) => setTimeout(() => res.json([
  {
    id: "181fd08d-1984-47cd-9e88-d470c3cd36e7",
    title: "Title 1",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/52e2d0414e53ac14f1dc8460962e33791c3ad6e04e50744074267bd69748c4_640.jpg"
},
{
    id: "de5334c0-d2dd-433d-8f6d-dcbc5dcecc57",
    title: "Title 2",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/54e9d1454b5ba914f1dc8460962e33791c3ad6e04e507440752b7edc9649c2_640.jpg"
},
{
    id: "67a62c90-9731-416f-a184-0646164b5e65",
    title: "Title 3",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/57e6d34b4b54ab14f1dc8460962e33791c3ad6e04e507441722a72d3964ec2_640.jpg"
},
{
    id: "67a62c90-9731-416f-ad84-0646164b5e65",
    title: "Title 4",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/57e8dd444851ad14f1dc8460962e33791c3ad6e04e5074417d2e7ed69f4cc4_640.jpg"
},
{
    id: "e2c26cad-90e1-4a8c-aa5d-be4373db0dfa",
    title: "Title 5",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/manipulation-smartphone-2507499_640.jpg"
},
{
    id: "2ef49e42-0c0f-4996-9275-81a3175f0b58",
    title: "Title 6",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/5fe8d1464a54b10ff3d8992cc12c30771037dbf85254784e77267adc9e48_640.jpg"
},
{
    id: "1b520bfb-e2c0-4cf8-9be1-bce57f4d5bac",
    title: "Title 7",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/55e8d4414b54b10ff3d8992cc12c30771037dbf85254784e77267fd2954e_640.jpg"
},
{
    id: "e1d33be0-3a8b-4ccd-bb03-23c1cdd386b2",
    title: "Title 8",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/53e0d0444956a514f1dc8460962e33791c3ad6e04e50744172297cd69e4ec6_640.jpg"
},
{
    id: "f460ebb1-e7fa-4f09-b761-85af50aeae80",
    title: "Title 9",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/g75e573685129dcb5e7475ed6e006fe5857efc0154f43ef77bab417354e7d2a6b71715dac48885307bd503f1797ae8b40_640.jpg"
},
{
    id: "edb35f72-a793-4545-b649-ea522e74bfaf",
    title: "Title 10",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/g5e88100863414dbdb30f6ba4c053e7e2d5c4ccb9f781dd52e7392e6c95826b83302b30779a019d15ced6e5cce473483a_640.jpg"
},
{
    id: "921f0b7d-b7d1-450c-b87a-d5acf53966c2",
    title: "Title 11",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/54e5d646425aa414f1dc8460962e33791c3ad6e04e50744172297bd59649c5_640.jpg"
},
{
    id: "02eaf87c-5df4-49f0-b56d-15705ff4df37",
    title: "Title 12",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/g5388a721d86dd886b7e30bae8b2f80be19d6a5c8d365f9ea22383b1dfb3c541e29ec3688ec511b9448f76b04820b9781_640.jpg"
},
{
    id: "132c5356-1351-436a-930b-46791e0b4bbe",
    title: "Title 13",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/g0f6f27b04c275550b4e86010d44d814bdebffe660fd38d3fb88768fcbb360d853edc9d3dc51202e11366ecba3e0e5f5f_640.jpg"
},
{
    id: "000b2d94-2ed6-4c73-a67b-2a8833704ced",
    title: "Title 14",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/geadfbcfe3a5b92082a91b969851571df6198523e212485bbe0d9b1dc61a17236294cac4370a4bebd67cd83adf7e02992_640.jpg"
},
{
    id: "d5eccdd8-eed8-433b-a4cd-cd80ab4e62f8",
    title: "Title 15",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/54e0dd474d51b10ff3d8992cc12c30771037dbf852547940752979d4974f_640.jpg"
},
{
    id: "57987f47-57f6-4581-8213-1902558072ff",
    title: "Title 16",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/57e4d0444255ae14f1dc8460962e33791c3ad6e04e5074417c2f7cd39044c4_640.jpg"
},
{
    id: "cc246c81-5225-44d9-83c3-943893166106",
    title: "Title 17",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/57e9d2464250ac14f1dc8460962e33791c3ad6e04e507440702d7edc9f44c4_640.jpg"
},
{
    id: "1394d348-f9c0-4d6e-b458-c5594b34bc43",
    title: "Title 18",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/57e1d7444f53a414f1dc8460962e33791c3ad6e04e5074417c2f73d69544c6_640.png"
},
{
    id: "90b08ea6-775e-4615-a2ef-406469000639",
    title: "Title 19",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/52e0dd4b4a57a914f1dc8460962e33791c3ad6e04e50744172287edc9e4ec7_640.jpg"
},
{
    id: "09643510-bde4-4dc5-8685-f8de55eea08a",
    title: "Title 20",
    thumbnail: "https://randomwordgenerator.com/img/picture-generator/53e0d04b4d5ab10ff3d8992cc12c30771037dbf85254784a722e7cd09645_640.jpg"
}
]), 3000 * Math.random()));



app.listen(3001, () => console.log('Mock server running'));
