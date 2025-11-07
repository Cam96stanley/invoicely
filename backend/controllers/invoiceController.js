const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await prisma.invoice.findMany({
      include: {
        user: true,
        fromAddress: true,
        toAddress: true,
        items: true,
      },
    });
    res.status(200).json({
      status: 'success',
      results: invoices.length,
      data: {
        invoices,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
