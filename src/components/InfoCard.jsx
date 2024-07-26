import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function InfoCard({ title, description }) {
  return (
    <Card className="mt-6">
      <CardBody>
        <Typography
          variant="h1"
          color="white"
          className="mb-2 font-bold text-6xl truncate overflow-hidden whitespace-nowrap font-poppins"
          style={{ fontFamily: 'Nova Square, sans-serif' }}
        >
          {title}
        </Typography>
        <Typography color="white" className="font-poppins" style={{ fontFamily: 'Nova Square, sans-serif' }}>
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}
